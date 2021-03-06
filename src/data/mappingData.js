import {chain} from 'lodash';

// Eventbrite Categories Mapping
const BUSINESS = 101;
const SCIENCE = 102;
const MUSIC = 103;
const FILM = 104;
const PERFORMING = 105;
const FASHION = 106;
const HEALTH = 107;
const SPORTS = 108;
const TRAVEL = 109;
const FOOD = 110;
const CHARITY = 111;
const POLITICS = 112;
const COMMUNITY = 113;
const RELIGION = 114;
const FAMILY_EDUCATION = 115;
const SEASONAL = 116;
const HOME_LIFESTYLE = 117;
const AUTO_BOAT_AIR = 118;
const HOBBIES = 119;
const SCHOOL = 120;
const OTHER = 199;

const EVENTBRITE_CATEGORY = 'EventbriteCategory';
const BUSINESS_EVENTBRITE_CATEGORY = `${EVENTBRITE_CATEGORY}/${BUSINESS}`;
const SCIENCE_EVENTBRITE_CATEGORY = `${EVENTBRITE_CATEGORY}/${SCIENCE}`;
const MUSIC_EVENTBRITE_CATEGORY = `${EVENTBRITE_CATEGORY}/${MUSIC}`;
const FILM_EVENTBRITE_CATEGORY = `${EVENTBRITE_CATEGORY}/${FILM}`;
const PERFORMING_EVENTBRITE_CATEGORY = `${EVENTBRITE_CATEGORY}/${PERFORMING}`;
const FASHION_EVENTBRITE_CATEGORY = `${EVENTBRITE_CATEGORY}/${FASHION}`;
const HEALTH_EVENTBRITE_CATEGORY = `${EVENTBRITE_CATEGORY}/${HEALTH}`;
const SPORTS_EVENTBRITE_CATEGORY = `${EVENTBRITE_CATEGORY}/${SPORTS}`;
const TRAVEL_EVENTBRITE_CATEGORY = `${EVENTBRITE_CATEGORY}/${TRAVEL}`;
const FOOD_AND_DRINK_EVENTBRITE_CATEGORY = `${EVENTBRITE_CATEGORY}/${FOOD}`;
const CHARITY_EVENTBRITE_CATEGORY = `${EVENTBRITE_CATEGORY}/${CHARITY}`;
const POLITICS_EVENTBRITE_CATEGORY = `${EVENTBRITE_CATEGORY}/${POLITICS}`;
const COMMUNITY_EVENTBRITE_CATEGORY = `${EVENTBRITE_CATEGORY}/${COMMUNITY}`;
const RELIGION_EVENTBRITE_CATEGORY = `${EVENTBRITE_CATEGORY}/${RELIGION}`;
const FAMILY_EDUCATION_EVENTBRITE_CATEGORY = `${EVENTBRITE_CATEGORY}/${FAMILY_EDUCATION}`;
const SEASONAL_EVENTBRITE_CATEGORY = `${EVENTBRITE_CATEGORY}/${SEASONAL}`;
const HOME_LIFESTYLE_EVENTBRITE_CATEGORY = `${EVENTBRITE_CATEGORY}/${HOME_LIFESTYLE}`;
const AUTO_BOAT_AIR_EVENTBRITE_CATEGORY = `${EVENTBRITE_CATEGORY}/${AUTO_BOAT_AIR}`;
const HOBBIES_EVENTBRITE_CATEGORY = `${EVENTBRITE_CATEGORY}/${HOBBIES}`;
const SCHOOL_EVENTBRITE_CATEGORY = `${EVENTBRITE_CATEGORY}/${SCHOOL}`;
const OTHER_EVENTBRITE_CATEGORY = `${EVENTBRITE_CATEGORY}/${OTHER}`;

const EVENTBRITE_CATEGORY_MAPPING = {
    [BUSINESS_EVENTBRITE_CATEGORY]: 'Business',
    [SCIENCE_EVENTBRITE_CATEGORY]: 'Science & Tech',
    [MUSIC_EVENTBRITE_CATEGORY]: 'Music',
    [FILM_EVENTBRITE_CATEGORY]: 'Film & Media',
    [PERFORMING_EVENTBRITE_CATEGORY]: 'Arts',
    [FASHION_EVENTBRITE_CATEGORY]: 'Fashion',
    [HEALTH_EVENTBRITE_CATEGORY]: 'Health',
    [SPORTS_EVENTBRITE_CATEGORY]: 'Sports & Fitness',
    [TRAVEL_EVENTBRITE_CATEGORY]: 'Travel & Outdoor',
    [FOOD_AND_DRINK_EVENTBRITE_CATEGORY]: 'Food & Drink',
    [CHARITY_EVENTBRITE_CATEGORY]: 'Charity & Causes',
    [POLITICS_EVENTBRITE_CATEGORY]: 'Government',
    [COMMUNITY_EVENTBRITE_CATEGORY]: 'Community',
    [RELIGION_EVENTBRITE_CATEGORY]: 'Spirituality',
    [FAMILY_EDUCATION_EVENTBRITE_CATEGORY]: 'Family & Education',
    [SEASONAL_EVENTBRITE_CATEGORY]: 'Holiday',
    [HOME_LIFESTYLE_EVENTBRITE_CATEGORY]: 'Home & Lifestyle',
    [AUTO_BOAT_AIR_EVENTBRITE_CATEGORY]: 'Auto, Boat & Air',
    [HOBBIES_EVENTBRITE_CATEGORY]: 'Hobbies',
    [SCHOOL_EVENTBRITE_CATEGORY]: 'School Activities',
    [OTHER_EVENTBRITE_CATEGORY]: 'Other',
};

// Eventbrite Format Mapping
const CONFERENCE = 1;
const SEMINAR = 2;
const EXPO = 3;
const CONVENTION = 4;
const FESTIVAL = 5;
const PERFORMANCE = 6;
const SCREENING = 7;
const GALA = 8;
const CLASS = 9;
const NETWORKING = 10;
const PARTY = 11;
const RALLY = 12;
const TOURNAMENT = 13;
const GAME = 14;
const RACE = 15;
const TOUR = 16;
const ATTRACTION = 17;
const RETREAT = 18;
const APPEARANCE = 19;

const EVENTBRITE_FORMAT = 'EventbriteFormat';
const CONFERENCE_EVENTBRITE_FORMAT = `${EVENTBRITE_FORMAT}/${CONFERENCE}`;
const SEMINAR_EVENTBRITE_FORMAT = `${EVENTBRITE_FORMAT}/${SEMINAR}`;
const EXPO_EVENTBRITE_FORMAT = `${EVENTBRITE_FORMAT}/${EXPO}`;
const CONVENTION_EVENTBRITE_FORMAT = `${EVENTBRITE_FORMAT}/${CONVENTION}`;
const FESTIVAL_EVENTBRITE_FORMAT = `${EVENTBRITE_FORMAT}/${FESTIVAL}`;
const PERFORMANCE_EVENTBRITE_FORMAT = `${EVENTBRITE_FORMAT}/${PERFORMANCE}`;
const SCREENING_EVENTBRITE_FORMAT = `${EVENTBRITE_FORMAT}/${SCREENING}`;
const GALA_EVENTBRITE_FORMAT = `${EVENTBRITE_FORMAT}/${GALA}`;
const CLASS_EVENTBRITE_FORMAT = `${EVENTBRITE_FORMAT}/${CLASS}`;
const NETWORKING_EVENTBRITE_FORMAT = `${EVENTBRITE_FORMAT}/${NETWORKING}`;
const PARTY_EVENTBRITE_FORMAT = `${EVENTBRITE_FORMAT}/${PARTY}`;
const RALLY_EVENTBRITE_FORMAT = `${EVENTBRITE_FORMAT}/${RALLY}`;
const TOURNAMENT_EVENTBRITE_FORMAT = `${EVENTBRITE_FORMAT}/${TOURNAMENT}`;
const GAME_EVENTBRITE_FORMAT = `${EVENTBRITE_FORMAT}/${GAME}`;
const RACE_EVENTBRITE_FORMAT = `${EVENTBRITE_FORMAT}/${RACE}`;
const TOUR_EVENTBRITE_FORMAT = `${EVENTBRITE_FORMAT}/${TOUR}`;
const ATTRACTION_EVENTBRITE_FORMAT = `${EVENTBRITE_FORMAT}/${ATTRACTION}`;
const RETREAT_EVENTBRITE_FORMAT = `${EVENTBRITE_FORMAT}/${RETREAT}`;
const APPEARANCE_EVENTBRITE_FORMAT = `${EVENTBRITE_FORMAT}/${APPEARANCE}`;

export const EVENTBRITE_FORMAT_MAPPING = {
    [CONFERENCE_EVENTBRITE_FORMAT]: 'Conference',
    [SEMINAR_EVENTBRITE_FORMAT]: 'Seminar',
    [EXPO_EVENTBRITE_FORMAT]: 'Expo',
    [CONVENTION_EVENTBRITE_FORMAT]: 'Convention',
    [FESTIVAL_EVENTBRITE_FORMAT]: 'Festival',
    [PERFORMANCE_EVENTBRITE_FORMAT]: 'Performance',
    [SCREENING_EVENTBRITE_FORMAT]: 'Screening',
    [GALA_EVENTBRITE_FORMAT]: 'Gala',
    [CLASS_EVENTBRITE_FORMAT]: 'Class',
    [NETWORKING_EVENTBRITE_FORMAT]: 'Networking',
    [PARTY_EVENTBRITE_FORMAT]: 'Party',
    [RALLY_EVENTBRITE_FORMAT]: 'Rally',
    [TOURNAMENT_EVENTBRITE_FORMAT]: 'Tournament',
    [GAME_EVENTBRITE_FORMAT]: 'Game',
    [RACE_EVENTBRITE_FORMAT]: 'Race',
    [TOUR_EVENTBRITE_FORMAT]: 'Tour',
    [ATTRACTION_EVENTBRITE_FORMAT]: 'Attraction',
    [RETREAT_EVENTBRITE_FORMAT]: 'Retreat',
    [APPEARANCE_EVENTBRITE_FORMAT]: 'Appearance',
};

// Dates Mapping
const TODAY = 'today';
const TOMORROW = 'tomorrow';
const THIS_MONTH = 'this_month';
const THIS_WEEK = 'this_week';
const THIS_WEEKEND = 'this_weekend';
const NEXT_WEEK = 'next_week';
const NEXT_MONTH = 'next_month';

export const DATES_MAPPING = {
    [TODAY]: 'Today',
    [TOMORROW]: 'Tomorrow',
    [THIS_WEEKEND]: 'This weekend',
    [THIS_WEEK]: 'This week',
    [NEXT_WEEK]: 'Next week',
    [THIS_MONTH]: 'This month',
    [NEXT_MONTH]: 'Next month',
};

/*
 Receives a data map where the keys correlate to actual value, and the
 value correlates to what should be displayed. Reformats into a structure
 suitable for the <SelectField />

 @param dataMap - opbject
 {'this_week': 'This week', 'this_month': 'This month'}

 @return array
 [
    {value: 'this_week', display: 'This week'},
    {value: 'this_month', display: 'This month'}
]
*/
const _formatMapper = (dataMap, valueKey, displayKey) => (
    chain(dataMap)
        .toPairs()
        .map(([key, displayValue]) => ({
            [valueKey]: key,
            [displayKey]: displayValue,
        }))
        .value()
);

const _formatMappingForSelectField = (dataMap) => _formatMapper(dataMap, 'value', 'display');

export const FORMATTED_CATEGORY_MAPPING = _formatMappingForSelectField(EVENTBRITE_CATEGORY_MAPPING);
export const FORMATTED_FORMAT_MAPPING = _formatMappingForSelectField(EVENTBRITE_FORMAT_MAPPING);
export const FORMATTED_DATE_MAPPING = _formatMappingForSelectField(DATES_MAPPING);