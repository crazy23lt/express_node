import ResultCode from "./resultCode";
class Result<T> {
  public code: number;
  public msg: string;
  public ret: T;
  public time: number = Date.now();
  constructor(code: number, msg: string, data: T) {
    this.code = code;
    this.msg = msg;
    this.ret = data;
  }
  static success<T>(data?: T) {
    return new Result(
      ResultCode.SUCCESS.code,
      ResultCode.SUCCESS.desc,
      data ?? null
    );
  }
  static fail<T>(errData?: T) {
    return new Result(
      ResultCode.FAILED.code,
      ResultCode.FAILED.desc,
      errData ?? null
    );
  }
  static validateFailed<T>(param?: T) {
    return new Result(
      ResultCode.VALIDATE_FAILED.code,
      ResultCode.VALIDATE_FAILED.desc,
      param ?? null
    );
  }
  static notFound<T>(param?: T) {
    return new Result(
      ResultCode.API_NOT_FOUND.code,
      ResultCode.API_NOT_FOUND.desc,
      param ?? null
    );
  }
}
export default Result;
