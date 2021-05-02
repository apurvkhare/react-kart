import Commerce from '@chec/commerce.js';
import keys from '../../env.json'

// in production store the key in .env file use this instead 
// export const commerce = new Commerce(process.env.REACT_APP_CHEC_PUBLIC_KEY, true);

export default new Commerce(keys.REACT_APP_CHEC_PUBLIC_KEY, true);