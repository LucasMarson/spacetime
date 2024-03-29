import { Camera, ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function NewMemories() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <Link
        href="/"
        className="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        voltar à timeline
      </Link>

      <form className="flex flex-1 flex-col gap-2">
        <div className="item-center flex gap-4">
          <label
            htmlFor="media"
            className="houver:text-gray-100 flex cursor-pointer items-center gap-1.5 text-sm text-gray-200"
          >
            <Camera className="h-4 w-4" />
            Anexar mídia
          </label>

          <label
            htmlFor="isPublic"
            className='intem-center text-gray-200" flex gap-1.5 text-sm text-gray-200'
          >
            <input
              type="checkbox"
              name="isPublic"
              id="isPublic"
              value="true"
              className="h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500 "
            />
            Tornar memória pública
          </label>
        </div>
        <input type="file" id="media" className="invisible h-0 w-0" />

        <textarea
          name="content"
          spellCheck={false}
          className="w-full flex-1 resize-none border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0"
          placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
        />
      </form>
    </div>
  )
}
