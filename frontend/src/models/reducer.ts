export interface GenericAction<Type = string, Payload = any> {
  type: Type;
  payload: Payload;
}
