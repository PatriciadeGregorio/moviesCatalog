export abstract class UseCase<Result = void, Param = void> {
    abstract internalExecute(param: Param): Promise<Result>;
}
