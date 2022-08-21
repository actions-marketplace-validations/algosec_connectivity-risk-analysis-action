import { Github } from "./github";

export interface IVersionControl {
    pullRequest: any;
    payload: any;
    repo: any;
    logger: any;
    http: any;
    workspace: string
    workDir: string
    token: string
    sha: string
    octokit?: any
    fileTypes: string[]
    getRepoRemoteUrl(): string;
    createComment(body: string)
    parseCodeAnalysis(analysis, VersionControl)
    getDiff(vcsObject)
    checkForDiffByFileTypes()
    parseOutput(filesToUpload, analysisResult)
    uploadAnalysisFile(actionUuid: string, body: any, jwt: string)
    getInputs()
   
}

export class GitLab implements IVersionControl {
    pullRequest: any;
    payload: any;
    repo: any;
    logger: any;
    http: any;
    workspace: string
    token: string
    sha: string
    workDir: string
    fileTypes: string[]

    constructor(){
        this.workspace = process?.env?.GITLAB_WORKSPACE
        this.token =  process?.env?.GITLAB_TOKEN 
        this.sha =  process?.env?.GITLAB_SHA 
    }

    getInputs(){}


    getDiff(client){

    }

    createComment(options){

    }

    parseCodeAnalysis(analysis, VersionControl){

    }

    getRepoRemoteUrl(){
        return ''
    }

    checkForDiffByFileTypes(){

    }

    parseOutput(filesToUpload, analysisResult){}

    uploadAnalysisFile(actionUuid: string, body: any, jwt: string){}

}

export const versionControlMap = {
    github: Github,
    gitlab: GitLab
}
export type VersionControlMap = typeof versionControlMap;

export type VersionControlKeys = keyof VersionControlMap;

type VersionControlTuples<T> = T extends VersionControlKeys ? [T, InstanceType<VersionControlMap[T]>] : never;

export type VersionControlSingleKeys<K> = [K] extends (K extends VersionControlKeys ? [K] : never) ? K : never;

type VersionControlClassType<A extends VersionControlKeys> = Extract<VersionControlTuples<VersionControlKeys>, [A, any]>[1];





export class VersionControlFactory {
    static getInstance<K extends VersionControlKeys>(versionControlKey: VersionControlSingleKeys<K>): VersionControlClassType<K> {
        return new versionControlMap[versionControlKey]()
    }
}



// const terraform = VersionControlFactory.getInstance("terraform");
// const cloudformation = VersionControlFactory.getInstance("cloudformation");

// console.log(
//   "IaS versionControl type: ",
//   new VersionControlService().getInstanceByType("cloudformation")
// );
// console.log(
//     "IaS versionControl type: ",
//     new VersionControlService().getInstanceByType("terraform")
//   );