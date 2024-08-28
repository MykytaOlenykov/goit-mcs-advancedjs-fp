import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://your-energy.b.goit.study/api/',
});

/**
 * Fetches a list of exercises based on the provided filtering parameters.
 *
 * @async
 * @function getExercises
 * @param {Object} [args]
 * @param {Object} [args.params] - Object containing filtering parameters.
 * @param {string} [args.params.bodypart] - body part for search exercises by body part.
 * @param {string} [args.params.muscles] - muscle for search exercises by muscle.
 * @param {string} [args.params.equipment] - equipment for search exercises by equipment.
 * @param {string} [args.params.keyword] - keyword for search by exercise name.
 * @param {number} [args.params.page] - number page of the exercises.
 * @param {number} [args.params.limit] - limit for the exercises.
 * @param {AbortSignal} [args.signal] - An AbortSignal to optionally cancel the request.
 * @returns {Promise<{
 *      page: number;
 *      perPage: number;
 *      totalPages: number;
 *      results: Array<{
 *          _id: string;
 *          bodyPart: string;
 *          equipment: string;
 *          gifUrl: string;
 *          name: string;
 *          target: string;
 *          description: string;
 *          rating: number;
 *          burnedCalories: number;
 *          time: number;
 *          popularity: number;
 *      }>}>} - Returns a promise that resolves to an array of exercise objects.
 */
export async function getExercises(args) {
  
  const { params, signal } = args ?? {};
  const { page = 1, limit = 10, ...otherParams } = params ?? {};

  const { res }  = await axiosInstance.get('exercises', {
    params: {
      ...otherParams,
      page,
      limit,
    },
    signal,
  });
  return res;
}

/**
 * Fetches details of a specific exercise by its ID.
 *
 * @async
 * @function getExerciseById
 * @param {Object} args - Object containing function arguments.
 * @param {string} args.exerciseId - The ID of the exercise to fetch.
 * @param {AbortSignal} [args.signal] - An AbortSignal to optionally cancel the request.
 * @returns {Promise<{
 *      _id: string;
 *      bodyPart: string;
 *      equipment: string;
 *      gifUrl: string;
 *      name: string;
 *      target: string;
 *      description: string;
 *      rating: number;
 *      burnedCalories: number;
 *      time: number;
 *      popularity: number;
 * }>} - Returns a promise that resolves to an object containing exercise details.
 */
export async function getExerciseById({ exerciseId, signal }) {
  const { res } = await axiosInstance.get(`exercises/${exerciseId}`, {
    signal,
  });
  return res;
}

/**
 * Adds rating and review for a specific exercise.
 *
 * @async
 * @function addExerciseRating
 * @param {Object} args - Object containing function arguments.
 * @param {string} args.exerciseId - The ID of the exercise to rate.
 * @param {Object} args.body - Object containing rating details.
 * @param {number} args.body.rate - The rating value (e.g., 5).
 * @param {string} args.body.email - The email of the user submitting the rating.
 * @param {string} args.body.review - The user's review of the exercise.
 * @returns {Promise<{
 *      _id: string;
 *      bodyPart: string;
 *      equipment: string;
 *      gifUrl: string;
 *      name: string;
 *      target: string;
 *      description: string;
 *      rating: number;
 *      burnedCalories: number;
 *      time: number;
 *      popularity: number;
 * }>} - Returns a promise that resolves to the updated exercise details.
 */
export async function addExerciseRating({ exerciseId, body }) {
  const { res } = await axiosInstance.patch(
    `exercises/${exerciseId}/rating`,
    body
  );
  return res;
}

/**
 * Fetches filter options based on the provided parameters.
 *
 * @async
 * @function getFilters
 * @param {Object} [args] - Object containing function arguments.
 * @param {Object} [args.params] - Object containing filtering parameters.
 * @param {string} [args.params.filter] - Filter criteria for fetching filter options.
 * @param {number} [args.params.page] - Page number for the filter options.
 * @param {number} [args.params.limit] - Limit for the number of filter options returned per page.
 * @param {AbortSignal} [args.signal] - An AbortSignal to optionally cancel the request.
 * @returns {Promise<{
 *      page: number;
 *      perPage: number;
 *      totalPages: number;
 *      results: Array<{
 *          filter: string;
 *          name: string;
 *          imgURL: string;
 * }>}>} - Returns a promise that resolves to an object containing filters.
 */
export async function getFilters(args) {
  const { params, signal } = args ?? {};
  const { page = 1, limit = 12, ...otherParams } = params ?? {};

  

  const { data } = await axiosInstance.get('filters', {
    params: {
      ...otherParams,
      page,
      limit,
    },
    signal,
  });
  return data;
}

/**
 * Fetches a random quote from the API.
 *
 * @async
 * @function getQuote
 * @param {Object} [args] - Object containing function arguments.
 * @param {AbortSignal} [args.signal] - An AbortSignal to optionally cancel the request.
 * @returns {Promise<{
 *      author: string;
 *      quote: string;
 * }>} - Returns a promise that resolves to an object containing quote.
 */
export async function getQuote(args) {
  const { signal } = args ?? {};
  const { res } = await axiosInstance.get(`quote`, { signal });
  return res;
}

/**
 * Creates a new subscription with the provided details.
 *
 * @async
 * @function createSubscription
 * @param {Object} args - Object containing function arguments.
 * @param {Object} args.body - Object containing subscription details.
 * @param {string} args.body.email - The email address of the subscriber.
 * @returns {Promise<{
 *      message: string;
 * }>} - Returns a promise that resolves to the response from the server, confirming the subscription creation.
 */
export async function createSubscription({ body }) {
  const { res } = await axiosInstance.post(`subscription`, body);
  return res;
}
