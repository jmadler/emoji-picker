# Emoji Picker

:heart_eyes: :stuck_out_tongue_winking_eye: :joy: :stuck_out_tongue: Instantly add Emoji support to input fields on your website! :boom: :sparkles: :thumbsup: :metal:

![Example Screenshot](http://one-signal.github.io/emoji-picker/screenshot.png)

**Demo:** http://one-signal.github.io/emoji-picker/

#You get:
  - Input fields converted to contenteditable rich text areas with emoji support
  - A happy face icon on the top right of each rich text area, which brings up the menu on click
  - An emoji selection menu, with recently selected emojis at the top (thanks to angular-emoji-popup's author)
  - Text area values can be easily converted between Unicode and HTML (Unicode+Image Tags)

#What happens under the hood:
  - When you call `new EmojiPicker().discover()`, all elements with the data attribute `data-emojiable="true"` are found, a contenteditable div is created after each one, and the original input field is hidden.
  - When you type text into this contenteditable div, events are triggered upon each keypress/text change as well as each emoji selection, and the contents of this contenteditable div are copied to the original (now hidden) input field
  - Text entered into this contenteditable div is plain text; selected emojis are actually `<img>` tags
  - To get the value of the contenteditable div, call `element.val()` on the underlying hidden input field. The `<img>` emojis will be converted into Unicode emojis (plain text)
  
#Improvements from the original forks:
  - The top-right smiley face that allows you to bring up the emoji picker menu
  - The smiley face shifts left appropriately when text entered exceeds the height and causes a scrollbar to appear
  - The `maxlength` property of input fields is respected (emoji selections count as a single character)
  - CSS classes from the original input field are copied over to the new contenteditable div

#Credits:
This is a slightly modified version of [angular-emoji-popup](https://github.com/Coraza/angular-emoji-popup), which was written based on [jquery-emojiarea](https://github.com/diy/jquery-emojiarea) (converts input fields to rich emoji input areas) and uses [nanoScrollerJs](https://github.com/jamesflorentino/nanoScrollerJS) (for the popup's custom-skinned scrollbar). This version removes AngularJS as a dependency.

We built this to power emoji selection for [OneSignal](https://onesignal.com), our multi-platform push notification service.
