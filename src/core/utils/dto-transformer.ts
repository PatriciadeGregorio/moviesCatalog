export interface DtoTransformer<Dto, Model> {
    toModel?(dto: Dto): Model
    toDto?(model: Model): Dto
}
