import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as DevTscLambda from '../src/stack/dev-tsc-lambda-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new DevTscLambda.DevTscLambdaStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
