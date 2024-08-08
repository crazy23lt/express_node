class ResultCode {
  public code: number;
  public desc: string;
  constructor(code: number, desc: string) {
    this.code = code;
    this.desc = desc;
  }
  static SUCCESS = new ResultCode(200, "成功");
  static FAILED = new ResultCode(500, "失败");
  static VALIDATE_FAILED = new ResultCode(400, "参数校验失败");
  static API_NOT_FOUND = new ResultCode(404, "接口不存在");
  static API_BUSY = new ResultCode(700, "操作过于频繁");
}
export default ResultCode