export const fetchData = async (): Promise<any> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
}