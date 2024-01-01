export default async function getUserPosts(userId: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

    // const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, { cache: 'force-cache'}); this is the default for SSR {cache: 'no-cache'} means don't cache the data

    // const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, { next: { revalidate: 60}}); incremental static site generation , allows for server side rendering... caches but updates content after 60 sec
  
    if (!res.ok) return undefined;
    
    return res.json();
  }
  