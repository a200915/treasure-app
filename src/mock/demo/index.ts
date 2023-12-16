import { resSuccess } from '../util';

export default [
    {
        url: '/mock/demo',
        method: 'post',
        timeout: '320',
        response:( { body }: {body: any} ) => {
            console.log(body);
            return resSuccess({
                str: '测试',
                num: 123,
            })
        }
    }
]