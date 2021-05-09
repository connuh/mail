/**
 * @author Conner
 * @since 08/05/21
 * @version 1.0.0
 */

// Variables
const BASE_URL: string = "https://www.1secmail.com/api/v1";

// Mail Class
export default class Mail {
  static async generate(amm: number = 1): Promise<string[]>  {
    let path: string = `${BASE_URL}/?action=genRandomMailbox&count=${amm}`,
        inboxes: string[] = await(await fetch(path)).json();

    return inboxes;
  }

  static async get(inbox: string, id?: number|string): Promise<string[]> {
    if(!this.isValid(inbox)) throw "Please provide a valid E-Mail!";
    
    let path: string = `${BASE_URL}/?action=${id ? "readMessage" : "getMessages"}&login=${inbox.split("@")[0]}&domain=${inbox.split("@")[1]}${id ? `&id=${id}` : ""}`,
        mail: string|string[] = await(await fetch(path)).text();

    if(mail === "Message not found") throw "Please provide a valid ID!";
    else return JSON.parse(mail);
  }

  static isValid(inbox: string): boolean {
    if(inbox.indexOf("@") !== -1 && inbox.split("@").length === 2) return true; 
    return false;
  }
}