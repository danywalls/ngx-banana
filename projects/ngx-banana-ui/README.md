# ngx-banana-ui
Welcome to ngx-banana-ui, an Angular library that provides a set of UI components to enhance your application's user interface. This library aims to simplify the development process by offering reusable and customizable components, including the banana-button component.

## Installation
To use ngx-banana-ui in your Angular project, you need to follow these steps:

Install the library using npm:
```bash
npm install ngx-banana-ui
```
Import the NgxBananaUiModule in your application's module:
```typescript
import { NgxBananaUiModule } from 'ngx-banana-ui';

@NgModule({
imports: [
// ...
NgxBananaUiModule
],
// ...
})
export class AppModule { }
```
## Usage
Once you have installed and imported the NgxBananaUiModule, you can use the banana-button component in your templates.

```html
<banana-button [label]="'Click me!'" [theme]="'summer'" (click)="handleClick()"></banana-button>
```
### Banana Button
The banana-button component is a customizable button that can be used in various scenarios. It provides the following inputs and outputs:

### Inputs
label (string): The label or text to be displayed on the button. (Default: '')
## Theming
The banana-button component supports theming to customize its appearance. You can set the theme by using the theme input property. The available themes are:

- summer: A summer-themed button.
- spring: A spring-themed button.
To customize the button's appearance based on the selected theme, you can use CSS variables. Here are the available CSS variables for each theme:

Summer Theme
```css
banana-button[data-theme="summer"] {
--banana-btn-bg-color: rgb(222, 24, 114);
--banana-btn-color: rgb(143, 218, 43);
}
```
Spring Theme
```css
banana-button[data-theme="spring"] {
--banana-btn-bg-color: rgb(199, 206, 57);
--banana-btn-color: rgb(179, 29, 225);
}
```
You can override these CSS variables to customize the background color and text color of the button in your project.

### Outputs
click (EventEmitter<any>): Event emitted when the button is clicked.
Example:

```html
<banana-button [label]="'Save'" [theme]="'summer'" (click)="saveData()"></banana-button>
```
In the example above, we set the label to 'Save', the theme to 'summer', and defined a saveData method to handle the button's click event.

## Contribution
Contributions to ngx-banana-ui are welcome! If you encounter any issues or have suggestions for improvements, please open an issue on the GitHub repository.

To contribute to the development of ngx-banana-ui, follow these steps:

Clone the repository:
```bash
git clone https://github.com/danywalls/ngx-banana
```
Install the dependencies:
```bash
cd ngx-banana-ui
npm install
```
Make your changes and run the development server:
```bash
ng serve
```
### Submit a pull request with your changes.
Please ensure your code follows the existing coding style, includes appropriate tests, and is well-documented.

License
ngx-banana-ui is released under the MIT License.
