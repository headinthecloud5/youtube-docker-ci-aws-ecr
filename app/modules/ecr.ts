// modules/ecr/ecrComponent.ts
import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

export interface EcrComponentArgs {
  repositoryName: string;
  tags?: pulumi.Input<{ [key: string]: pulumi.Input<string> }>;
}

export class EcrComponent extends pulumi.ComponentResource {
  public readonly repository: aws.ecr.Repository;

  constructor(name: string, args: EcrComponentArgs, opts?: pulumi.ComponentResourceOptions) {
    super("custom:resource:EcrComponent", name, {}, opts);

    this.repository = new aws.ecr.Repository(name, {
      name: args.repositoryName,
      tags: args.tags,
    }, { parent: this });

    this.registerOutputs({
      repositoryUrl: this.repository.repositoryUrl,
    });
  }
}