export class Contact {
  constructor(
    public Name: string,
    public Email: string,
    public Phone: string,
    public Organization: string,
    public Misc: string,
    public OwnerId: string,
    public Id?: number
  ) { }
}
