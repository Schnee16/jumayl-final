declare const Deno: {
  env: {
    get(key: string): string | undefined;
  };
};

declare module "https://deno.land/std@0.224.0/http/server.ts" {
  export function serve(
    handler: (request: Request) => Response | Promise<Response>
  ): void;
}

declare module "https://esm.sh/resend@2.0.0" {
  export class Resend {
    constructor(apiKey: string);

    emails: {
      send(args: {
        from: string;
        to: string[];
        subject: string;
        html: string;
      }): Promise<unknown>;
    };
  }
}
