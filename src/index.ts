require('dotenv').config();

import { Application } from '@cmmv/core';
import { ExpressAdapter, ExpressModule } from '@cmmv/http';
import { ViewModule } from '@cmmv/view';

Application.create({
    httpAdapter: ExpressAdapter,
    modules: [ExpressModule, ViewModule],
});
