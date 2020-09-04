import ApiModule from '@calvin_von/axios-api-module';
import { useInterceptor } from './interceptor';
import { foreRequestMiddleware, postRequestMiddleware, fallbackMiddleware } from './middlewares';
import UserApis from './modules/user.api';

const baseURL = process.env.NODE_ENV === 'production' ? 'http://172.20.17.16:8360' : 'http://172.20.17.16:8360';

// create a modular namespace ApiModule instance
const apiMod = new ApiModule({
  // axios base config
  baseConfig: {
    baseURL,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    withCredentials: true,
    timeout: 60000
  },
  module: true,
  metadatas: {
    user: UserApis,
    // other: OtherApis
  }
});


// register middlewares
apiMod.useBefore(foreRequestMiddleware);
apiMod.useAfter(postRequestMiddleware);
apiMod.useCatch(fallbackMiddleware);

// get and export transformed api mapper instance
const apiMapper = apiMod.getInstance();

const axios = apiMod.getAxios();
useInterceptor(axios);
export default apiMapper;