# Autocomplete Chip Input README

Welcome to the Autocomplete Chip Input project! This project provides a user-friendly input experience with the ability to select items from a dynamic list and turn them into chips. The project is implemented in React and TypeScript, ensuring a clean and maintainable codebase.

## Demo

Check out the live demo: [https://autocomplete-chip-input.netlify.app/](https://autocomplete-chip-input.netlify.app/)

> **_NOTE_:** The current demo does not support responsiveness. Please view it on a desktop or laptop for the best experience.

## Features

1. **Autocomplete Input Field:**

   - Clicking on the input field triggers a dynamic list of items to appear.
   - As you type, the list updates to show only items that match your input.

2. **Chips:**

   - Clicking on an item in the list turns it into a chip displayed at the top of the input field.
   - The input field adjusts automatically to accommodate the selected chips.
   - Once an item becomes a chip, it is removed from the autocomplete list.

3. **Chip Removal:**

   - Each chip has an "X" icon for removal.
   - Clicking the "X" icon removes the chip and adds the corresponding item back to the autocomplete list.

4. **Backspace Functionality:**

   - When the input field is blank and the user presses backspace, the last chip will be removed and moved to edit.

5. **Keyboard Navigation**

- Use the arrow keys (Up and Down) to navigate through the suggestion list.
- Press Enter to select the highlighted suggestion as a chip.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/kuttyhub/autocomplete-chip-input.git
   ```

2. Install dependencies:

   ```bash
   cd autocomplete-chip-input
   npm install
   ```

3. Build and run the project:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173/` to view the application.
