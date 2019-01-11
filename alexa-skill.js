/* eslint-disable  func-names */
/* eslint-disable  no-console */
/* eslint-disable  no-use-before-define */

const Alexa = require('ask-sdk-core');

// 1. Handlers ===================================================================================

const LaunchHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;

        return request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        const responseBuilder = handlerInput.responseBuilder;
        const speechOutput = languageStrings.en.translation.WELCOME;
        return responseBuilder
            .speak(speechOutput)
            .reprompt(speechOutput)
            .getResponse();
    },
};

const AboutHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;

        return request.type === 'IntentRequest' && request.intent.name === 'AboutIntent';
    },
    handle(handlerInput) {
        const responseBuilder = handlerInput.responseBuilder;
        const speechOutput = languageStrings.en.translation.ABOUT;
        return responseBuilder
            .speak(speechOutput)
            .reprompt(speechOutput)
            .getResponse();
    },
};

const FoodHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'FoodIntent';
    },
    handle(handlerInput) {
        const attributesManager = handlerInput.attributesManager;
        const responseBuilder = handlerInput.responseBuilder;

        const sessionAttributes = attributesManager.getSessionAttributes();
        const restaurant = randomArrayElement(data.restaurants);
        sessionAttributes.restaurant = restaurant.name;
        const speechOutput = `For a great place to eat, I recommend, ${restaurant.name}. I've sent a coupon that could save you $5 to your phone.`;

        return responseBuilder.speak(speechOutput).reprompt(speechOutput).getResponse();
    },
};

const ShopHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return request.type === 'IntentRequest' && request.intent.name === 'ShopIntent';
    },
    handle(handlerInput) {
        const attributesManager = handlerInput.attributesManager;
        const responseBuilder = handlerInput.responseBuilder;

        const sessionAttributes = attributesManager.getSessionAttributes();
        const shop = randomArrayElement(data.shops);
        sessionAttributes.shop = shop.name;
        const speechOutput = `Try visiting, ${shop.name}. I've sent a coupon to your phone.`;

        return responseBuilder.speak(speechOutput).reprompt(speechOutput).getResponse();
    },
};

const StopHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;

        return request.type === 'IntentRequest'
            && (request.intent.name === 'AMAZON.NoIntent'
            || request.intent.name === 'AMAZON.CancelIntent'
            || request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const responseBuilder = handlerInput.responseBuilder;
        const speechOutput = languageStrings.en.translation.STOP;
        return responseBuilder
            .speak(speechOutput)
            .getResponse();
    }
};

const SessionEndedHandler = {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;

        return request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

        return handlerInput.responseBuilder.getResponse();
    },
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const request = handlerInput.requestEnvelope.request;

        console.log(`Error handled: ${error.message}`);
        console.log(` Original request was ${JSON.stringify(request, null, 2)}\n`);

        return handlerInput.responseBuilder
            .speak('Sorry, I can\'t understand the command. Please say again.')
            .reprompt('Sorry, I can\'t understand the command. Please say again.')
            .getResponse();
    },
};

const FallbackHandler = {

  // 2018-May-01: AMAZON.FallackIntent is only currently available in en-US locale.

  //              This handler will not be triggered except in that locale, so it can be

  //              safely deployed for any locale.

  canHandle(handlerInput) {

    const request = handlerInput.requestEnvelope.request;

    return request.type === 'IntentRequest'

      && request.intent.name === 'AMAZON.FallbackIntent';

  },

  handle(handlerInput) {

    return handlerInput.responseBuilder

      .speak(FALLBACK_MESSAGE)

      .reprompt(FALLBACK_REPROMPT)

      .getResponse();

  },

};


// 2. Constants ==================================================================================

const languageStrings = {
    en: {
        translation: {
            WELCOME: 'Welcome to Deals from Savior!',
            ABOUT: 'Say if you would like to eat or shop, and I will give you recommendations! Developed by the Airpod Only Boys, this app also gives you coupons when available.',
            STOP: 'Okay, see you next time!',
        },
    },
    // , 'de-DE': { 'translation' : { 'TITLE'   : "Local Helfer etc." } }
};

//food & drink, fun, clothing, essentials, electronics, other (travel & automotive)

const data = {
    city: 'Gloucester',
    state: 'MA',
    postcode: '01930',
    restaurants: [
        {
            name: "Zeke's Place",
            address: '66 East Main Street',
            phone: '978-283-0474',
            meals: 'breakfast, lunch',
            description: 'A cozy and popular spot for breakfast.  Try the blueberry french toast!',
        },
        {
            name: 'Morning Glory Coffee Shop',
            address: '25 Western Avenue',
            phone: '978-281-1851',
            meals: 'coffee, breakfast, lunch',
            description: 'A homestyle diner located just across the street from the harbor sea wall.',
        },
        {
            name: 'Sugar Magnolias',
            address: '112 Main Street',
            phone: '978-281-5310',
            meals: 'breakfast, lunch',
            description: 'A quaint eatery, popular for weekend brunch.  Try the carrot cake pancakes.',
        },
        {
            name: 'Seaport Grille',
            address: '6 Rowe Square',
            phone: '978-282-9799',
            meals: 'lunch, dinner',
            description: 'Serving seafood, steak and casual fare.  Enjoy harbor views on the deck.',
        },
        {
            name: 'Latitude 43',
            address: '25 Rogers Street',
            phone: '978-281-0223',
            meals: 'lunch, dinner',
            description: 'Features artsy decor and sushi specials.  Live music evenings at the adjoining Minglewood Tavern.',
        },
        {
            name: "George's Coffee Shop",
            address: '178 Washington Street',
            phone: '978-281-1910',
            meals: 'coffee, breakfast, lunch',
            description: 'A highly rated local diner with generously sized plates.',
        },

    ],
    shops: [
        {
            name: 'Whale Skins',
            description: 'Gloucester has tour boats that depart twice daily from Rogers street at the harbor.  Try either the 7 Seas Whale Watch, or Captain Bill and Sons Whale Watch. ',
            distance: '0',
        },
        {
            name: 'Sandy\'s Beach Shop',
            description: 'Facing the Atlantic Ocean, Good Harbor Beach has huge expanses of soft white sand that attracts hundreds of visitors every day during the summer.',
            distance: '2',
        },
        {
            name: 'Rockport Furniture',
            description: 'A quaint New England town, Rockport is famous for rocky beaches, seaside parks, lobster fishing boats, and several art studios.',
            distance: '4',
        },
        {
            name: 'Kay\'s Jewelers',
            description: 'Home of the Boston Red Sox, Fenway park hosts baseball games From April until October, and is open for tours. ',
            distance: '38',
        },
    ],
};

const SKILL_NAME = 'Deals from Savior';
const FALLBACK_MESSAGE = `The ${SKILL_NAME} skill can\'t help you with that. It can give you recommendations about shopping or places to eat, as well as provide coupons! What can I help you with?`;
const FALLBACK_REPROMPT = 'What can I help you with?';

// 3. Helper Functions ==========================================================================

function randomArrayElement(array) {
    let i = 0;
    i = Math.floor(Math.random() * array.length);
    return (array[i]);
}


// 4. Export =====================================================================================

const skillBuilder = Alexa.SkillBuilders.custom();
exports.handler = skillBuilder
    .addRequestHandlers(
        LaunchHandler,
        AboutHandler,
        FoodHandler,
        ShopHandler,
        StopHandler,
        FallbackHandler,
        SessionEndedHandler
    )
    .addErrorHandlers(ErrorHandler)
    .lambda();