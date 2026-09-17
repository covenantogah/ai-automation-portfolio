# Adding project images

Place project images in this directory and use their relative paths in `data/projects.json`, for example:

```json
"image": "assets/images/my-project.jpg"
```

Recommended: JPG, PNG, or WebP; landscape images around 1200 × 800 pixels. If you do not have an image for a project yet, remove its `image` property and the card will use its built-in color background.

You can add any number of projects by copying an object in `data/projects.json`. Keep filenames lowercase and use hyphens instead of spaces.
