require('dotenv').config();

import { Application } from '@cmmv/core';
import { DefaultAdapter, DefaultHTTPModule } from '@cmmv/http';
import { ViewModule } from '@cmmv/view';

import { IndexModule } from './modules/index.module';

Application.create({
    httpAdapter: DefaultAdapter,
    modules: [DefaultHTTPModule, ViewModule, IndexModule],
});
