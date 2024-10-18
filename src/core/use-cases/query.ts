import { UseCase } from './use-case.ts';

export abstract class Query<Result = void, Param = void> extends UseCase<Result, Param> {
}
