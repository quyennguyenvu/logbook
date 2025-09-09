# Periodic Logs

This repository is designed to manage and organize periodic logs, including daily and weekly notes. It leverages templates and scripts to streamline the creation and navigation of these notes.

## Plugins

- [Templater](https://silentvoid13.github.io/Templater)
- [Periodic notes](https://github.com/liamcain/obsidian-periodic-notes)
- [Minimal theme](https://github.com/kepano/obsidian-minimal-settings)

### Enhancements

- Show periodic icons in ribbon at startup

## Features

### Daily Logs

Track daily tasks, events, and reflections. Today notes will begin with task in `next up` section

| ![20250502005945](attachments/Pasted%20image%2020250502005945.png) | ![20250502010013](attachments/Pasted%20image%2020250502010013.png) |
| :----------------------------------------------------------------: | :----------------------------------------------------------------: |

### Weekly Logs

Summarize weekly highlights, learnings, and history.

| ![20250502010422](attachments/Pasted%20image%2020250502010422.png) |
| :----------------------------------------------------------------: |

## Folder Structure

The workspace is organized as follows:

```markdown
Tracking/
├── Daily/
│ ├── YYYY-MM-DD.md
├── Weekly/
│ ├── YYYY-WW.md
Templates/
├── Daily.md
├── Weekly.md
├── scripts/
│ ├── daily.js
│ ├── weekly.js
```

## Templates

Templates are stored in the `Templates/` folder and are used to generate periodic notes. Each template includes placeholders for dynamic content, such as dates and custom sections. `^today-tasks` must has blank lines before and after to work with Templater.

## Scripts

Scripts in the `Templates/scripts/` folder automate the creation of daily and weekly logs. These scripts can be customized to fit your workflow.

## Getting Started

1. Install Obsidian.
2. Create new vault -> replace `.obsidian/` and `Templates/`.
3. Organize your logs in the `Tracking/` folder.

## Contributing

Feel free to contribute by improving templates, adding features, or suggesting enhancements.

## License

This project is licensed under the [MIT License](LICENSE).
