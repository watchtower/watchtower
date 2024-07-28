import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function UI() {
  return (
    <main className="flex gap-8 p-6">
      <div className="flex flex-col space-y-3">
        <h2 className="text-2xl">Buttons</h2>
        <Button variant={'secondary'}>Create Monitor</Button>
        <Button variant={'destructive'}>Delete Monitor</Button>
      </div>

      <div className="flex flex-col space-y-3">
        <h2 className="text-2xl">Input</h2>
        <Input placeholder="Input" />
      </div>
    </main>
  );
}
