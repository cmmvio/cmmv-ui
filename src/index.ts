require('dotenv').config();

import { Application } from '@cmmv/core';
import { DefaultAdapter, DefaultHTTPModule } from '@cmmv/http';
import { ViewModule } from '@cmmv/view';

import { ApplicationModule } from './app.module';
import { IndexModule } from './modules/index.module';

Application.create({
    httpAdapter: DefaultAdapter,
    modules: [ApplicationModule, DefaultHTTPModule, ViewModule, IndexModule],
});
