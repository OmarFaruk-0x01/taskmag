export type ResponseStatus = {
  status: string;
};

// Dynamic Typing
// T = "Data" Response Type;
// K = Key for those data
export type ResponseData<T, K extends string> = {
  [_ in K]: T;
};

export type APIResponse<T, K extends string> = ResponseStatus &
  ResponseData<T, K>;
