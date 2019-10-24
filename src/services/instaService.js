export default class InstaService {
  constructor() {
    this._apiBase = 'http://localhost:3000';
  }

  getResourse = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

    if(!res.ok) {
      throw new Error(`Couldn't fetch ${url}; received ${res.status}`)
    }
    return await res.json();
  }

  getAllPosts = async () => {
    const res = await this.getResourse('/posts/');
    return res;
  }
}