const baseUrl = "http://localhost:3000/";
 
export const search = async <T>(path: string, params: any): Promise<T[]> => {
  const query: URLSearchParams = new URLSearchParams(params);
  const response = await fetch(baseUrl + path + query, {
    method: "GET",
  });
 
  const data: T[] = await response.json();
  return data;
};