import { Controller, Get, Response } from '@cmmv/http';

@Controller()
export class IndexController {
    @Get()
    async indexHandler(@Response() res) {
        return res.render('views/index');
    }
}
