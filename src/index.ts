import { app } from './app';
import chalk from 'chalk';

const main = app.listen(app.get('port'), () => {
  console.log(
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    chalk.yellow(`🚀...Server running on http://127.0.0.1:${app.get('port')}`)
  );
});

process.on('unhandledRejection', (uncaughtExc: Error) => {
  console.error(chalk.bgRed('UNCAUGHT EXCEPTION! 💥 Shutting down...'));
  console.error('uncaughtException Err::', uncaughtExc);
  console.error('uncaughtException Stack::', JSON.stringify(uncaughtExc.stack));
  main.close();
});

process.on('unhandledRejection', (err: Error) => {
  console.error(
    chalk.bgRed('UNHANDLED PROMISE REJECTION! 💥 Shutting down...')
  );
  console.error(err.name, err.message);
  main.close(() => {
    process.exit(1);
  });
});

process.on('SIGTERM', () => {
  console.log('👋 SIGTERM RECEIVED. Shutting down gracefully');
  main.close(() => {
    console.log('💥 Process terminated!');
  });
});
