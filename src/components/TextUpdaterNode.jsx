import { MessageCircleDashedIcon, MessageCircleIcon, MessageSquareMore } from 'lucide-react';
import { useCallback } from 'react';
import { Handle, Position } from 'reactflow';

function TextUpdaterNode({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="text-updater-node shadow-custom rounded-md border-gray-400 bg-white" >
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} />
      <div className=''>
        <label htmlFor="text" className='flex justify-between p-1 rounded-t-md px-3 text-sm w-full bg-green-300'>
            <div className='flex gap-2'>
                <MessageSquareMore strokeWidth={1} width={15}/>
            <span className='font-bold'>Send Message</span>
            </div>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1022px-WhatsApp.svg.png" height={"20px"} width={"20px"} alt="" />
            </div>
            </label>
        <input
          id="text"
          name="text"
          defaultValue={data.value}
          onChange={onChange}
          className="rounded-md p-1 m-2"
        />
      </div>
      <Handle type="source" position={Position.Right} isConnectable={isConnectable} />
    </div>
  );
}

export default TextUpdaterNode;
