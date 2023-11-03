const { Alice, Reply, Markup } = require('yandex-dialogs-sdk')
const alice = new Alice();

const M = Markup;
alice.command('', async ctx => Reply.text('Здравствуйте, я могу собирать покупки из вашей истории покупок в Пятерочке и предлагать блюда, которые можно приготовить'));
alice.command('Скажи что мне приготовить', async ctx =>
    Reply.text('Можно приготовить борщ. Годится ?'),
);
/*
alice.command(
    ['What is trending now?', 'Watch films', 'Whats in the theatre?'],
    ctx => {
        return {
            text: `What about 50 Angry Men?`,
            buttons: [M.button('Buy ticket'), M.button('What else?')],
        };
    },
);
alice.command(/(https?:\/\/[^\s]+)/g, ctx => Reply.text('Matched a link!'));
*/

alice.any(async ctx => Reply.text(`Я еще учусь.`));

const server = alice.listen(3001, '/my_freezer/');
