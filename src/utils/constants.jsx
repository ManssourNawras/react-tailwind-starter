

export const api_url = process.env.NODE_ENV === "production"
							? process.env.REACT_APP_BACK_URL_SERVER
							: process.env.REACT_APP_BACK_URL_TEST;

export const profile_url = process.env.NODE_ENV === "production"
							? process.env.REACT_APP_SHARED_URL_SERVER
							: process.env.REACT_APP_SHARED_URL_TEST;


