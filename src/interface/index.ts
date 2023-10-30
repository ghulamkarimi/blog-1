export interface IArticle {
  _id: string;
  userId: string,
  title: string;
  content: string;
  imgUrl: string;
  date: string;
  
}

export interface IAuthour {
  _id: string;
  firstName: string,
  lastName: string;
  email: string;
  photo: string;
  password: string;
}