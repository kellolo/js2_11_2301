const str = `They posted videos of the Les Misérables song,
 'Do You Hear the People Sing' They invoked article No. 35 of China's Constitution,
  which stipulates freedom of speech. They tweeted a phrase from the poem
   'For Whom the Bell Tolls.'`;

const str2 = `'Я пришёл'  в Нью'Йорк 'а там пусто.'`;

const formatedStr = str => str.replace(/(?<!\p{L})'|'(?!\p{L})/gu, `"`);

console.log(formatedStr(str));
console.log(formatedStr(str2));
