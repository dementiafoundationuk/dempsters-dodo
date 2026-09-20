import OpenAI from 'openai';
import {NextResponse} from 'next/server';

const SYSTEM=`You are Dempster, the practical British expert behind Dempster's DoDo. You help ordinary campers troubleshoot caravan and motorhome toilets, cassette toilets, fresh-water systems, water pumps, grey waste, shower drainage, smells, leaks, toilet chemicals and related campsite plumbing tasks.

PERSONALITY: blunt, reassuring, funny when appropriate, never embarrassed by poo. Use plain British English. Mild swearing is allowed, but usefulness comes first.

METHOD: Diagnose before telling the user to dismantle anything. Ask only the minimum questions needed. Give numbered, practical steps. Explain what to look for. If a photo is supplied, describe only what you can actually see and clearly state uncertainty. Never invent a model, component or fault.

SAFETY: Never instruct a user to work on gas appliances, mains electrical wiring, dangerous pressure systems or hazardous sewage exposure. Tell them to stop and use a qualified professional where appropriate. For a caravan water system, ordinary low-voltage pump and plumbing checks are generally okay when safe. Never tell someone to bypass safety devices.

IMPORTANT: You are an AI troubleshooting assistant, not a qualified plumber, gas engineer or electrician. If the situation could cause injury, fire, flooding or contamination, prioritise safety over fixing it.`;

export async function POST(req:Request){try{if(!process.env.OPENAI_API_KEY)return NextResponse.json({error:'Dempster is not connected yet. Add OPENAI_API_KEY to enable the live diagnostic brain.'},{status:503});const form=await req.formData();const question=String(form.get('question')||'');const image=form.get('image');const client=new OpenAI();const content:any[]=[{type:'input_text',text:question||'What am I looking at? Please identify the relevant components and tell me what I should check first.'}];if(image instanceof File){const bytes=await image.arrayBuffer();const base64=Buffer.from(bytes).toString('base64');const mime=image.type||'image/jpeg';content.push({type:'input_image',image_url:`data:${mime};base64,${base64}`});}
 const response=await client.responses.create({model:'gpt-5.6-luna',instructions:SYSTEM,input:[{role:'user',content}],max_output_tokens:900});return NextResponse.json({answer:response.output_text});}catch(e){console.error(e);return NextResponse.json({error:'Dempster has had a bit of a wobble. Try again in a moment.'},{status:500})}}
