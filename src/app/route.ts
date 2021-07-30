export interface RouteTest {
  id: number;
  terminal_id: number;
  ip_address: string;
  software_version: string;
  last_seen: string;
  data: [
    {
      description: string;
      result: string;
    }
  ];
}
