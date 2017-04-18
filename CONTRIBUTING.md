Version 2 of formBuilder improves on multilingual support through proper language files that can be loaded automatically depending on user's locale. The format of these files is also plain text, making it easier for translations to be added without the need to escape special characters. In this wiki we'll look at this file and describe how you can contribute to a language to the project.

---

### Language File
As mentioned its a basic text file and a sample of `en-US` looks like this:
```
autocomplete = Autocomplete
button = Button
cannotBeEmpty = This field cannot be empty
```
The new language module included in formBuilder 2.0 will handle all the escaping which should reduce margin of error when it comes to encoding special characters for JSON or other formats.

### Contributing
Updates and additions are always welcome. Contributions are best done in the form of pull-request to this repo however other arrangements can be made. Language filenames should follow the standard of `[language[-TERRITORY]]` using abbreviations or simply put `en-US` for US English, `zh-CN` for simplified Chinese and so on.

### Thank you
Everyone's contribution is very much appreciated. Special thanks goes to @HayriCan, @ryandiv, @xoniq, @J2TeaM, @dragosrobertn, @alien-art, @dniki, @AcNeidert, @hasanbozok, @pooya-eghbali, @bit950, @Krato, and @YI-CHING-WU who got this project rolling with their generous contributions.
