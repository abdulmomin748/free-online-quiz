export const quizCategory = async () => {
    const loadData = await fetch('https://openapi.programming-hero.com/api/quiz');
    const loadDataJson =  await loadData.json(loadData);
    return loadDataJson;
}

// export const quizItems = async (id) => {
//     return fetch(`https://openapi.programming-hero.com/api/quiz/${id}`);
// };