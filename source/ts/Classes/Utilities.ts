export class Utilities {
    /**
     * Gets the from an @Html.AntiForgeryToken()-created hidden input element on the web page.
     * You must incude the call to @Html.AntiForgeryToken() somewhere in the webpage.
     */
    static GetRequestVerificationToken(): string {
        let requestVerificationTokenElement: HTMLInputElement = document.querySelector('input[name="__RequestVerificationToken"]');

        let requestVerificationToken = requestVerificationTokenElement.value;
        return requestVerificationToken;
    }

    static ClearAllChildren(element: HTMLElement): void {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }
}