import cron from 'node-cron';

import User from '../models/User';
import SurveyResult from '../models/SurveyResult';

import ResultService from '../services/ResultServices';

cron.schedule('* */2 * * * *', async () => {
  const users = await User.findAll({
    where: {
      result_given: false,
      survey_done: true,
    },
  });

  if (users.length === 0) return;

  const promises = users.map(async (user) => {
    const result = await ResultService.generate(user.id);

    const banks = result.map((bank) => bank.id);
    const surveyResults = await SurveyResult.create({
      user_id: user.id,
      recommended_banks: banks,
    });

    user.update({
      result_given: true,
    });
    user.save();

    return surveyResults;
  });

  await Promise.all(promises);
});
