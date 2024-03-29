import { signupElements } from "./signup.elements";

export class signupMethods {
    static insertUsername (username) {
        signupElements.textboxes.username.invoke('val', username);
    }

    static insertPassword (password) {
        signupElements.textboxes.password.invoke('val', password);
    }

    static clickOnSignupButton () {
        signupElements.buttons.signUp.click();
    }

    static signUp(username, password) {
        this.insertUsername(username);
        this.insertPassword(password);
        this.clickOnSignupButton();
    }
}