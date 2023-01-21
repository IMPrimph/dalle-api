# Welcome to OpenAI Image Generator and Community sharing App

I wanna be honest today, I just wanted to use openai image generator, so started looking for some tutorials and found one by JSM on youtube and coded it along.


# Website like

[Link to the website](https://dall-e-api-image.netlify.app/)

## Functionalities of the website
- The users can generate random open ai images with a custom text prompt
- If they are too lazy to type out something, website has a bunch of random prompts
- After the image generation, the users can share their image to the community platform(not a community exactly, but a home page containing all the images which other users posted)
- On the Home page, the users can hover over an image to see the Author who published it and the prompt for which the image was generated
- And now, the users can search for images in the Home page based on the author who uploaded it or image prompt

## Technical Details

- Frontend
	- Pretty simple with React and Vite as build tool, tailwindcss for styling, and an npm package called file-saver for downloading images locally
- Backend
	- Built with Node.js, express.js and MongoDB as database
	- For the images upload, used cloudinary as always
- Hosting
	- Backend hosted on render, on a free tier, i see this as a potential alternative to Heroku
	- Frontend on netlify
