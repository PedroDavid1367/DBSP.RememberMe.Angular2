export class Note {
  constructor(
    public Title: string,
    public Category: string,
    public Priority: string,
    public Content: string,
    public OwnerId: string,
    public ScheduleTime?: number,
    public Id?: number,
    public Selected?: boolean
  ) { }
}
