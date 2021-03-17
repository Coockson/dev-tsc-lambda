#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { DevTscLambdaStack } from '../stack/dev-tsc-lambda-stack';

const app = new cdk.App();
new DevTscLambdaStack(app, 'DevTscLambdaStack');
