import { UseCase } from './use-case.ts';

export abstract class Command<Param = void, Result = void> extends UseCase<Result, Param> {
}
