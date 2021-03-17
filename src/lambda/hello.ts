exports.handler = async (event: any) => {
    console.log("request:", JSON.stringify(event, undefined, 2));

    console.log("Hello world!")

    return {
      statusCode: 200,
      headers: { "Content-Type": "text/plain" },
      body: `Hello, CDK! You've hit ${event.path}\n`
    };
  };