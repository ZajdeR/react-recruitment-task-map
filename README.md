##IMPORTANT NOTES

### https://ipstack.com
- Used API https://ipstack.com has limitations in free plan, it doesn't allow to use https protocol, for testing app you have to change browser settings to allow sending mixed-content. Instructions in link: https://experienceleague.adobe.com/docs/target/using/experiences/vec/troubleshoot-composer/mixed-content.html?lang=en#experiences
- Used API https://ipstack.com has limitations in case of searching by URL. I omitted this case. App allow searchinch only by IP address.

### google maps api
- Used API KEY for google maps is for testing purposes it shows according info.
- I left API KEYs in code - it will be moved to .env for prod ready app.

#
- app use tailwind for styling
- app don't contain tests (not enough time), but testing environment is configured
- I don't use any state management library like redux, for bigger app I will use redux or context for sharing state between components
